import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { AssociateServiceRoleToAccountRequest, AssociateServiceRoleToAccountResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateServiceRoleToAccountCommandInput = AssociateServiceRoleToAccountRequest;
export declare type AssociateServiceRoleToAccountCommandOutput = AssociateServiceRoleToAccountResponse & __MetadataBearer;
export declare class AssociateServiceRoleToAccountCommand extends $Command<AssociateServiceRoleToAccountCommandInput, AssociateServiceRoleToAccountCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: AssociateServiceRoleToAccountCommandInput;
    constructor(input: AssociateServiceRoleToAccountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateServiceRoleToAccountCommandInput, AssociateServiceRoleToAccountCommandOutput>;
    private serialize;
    private deserialize;
}
