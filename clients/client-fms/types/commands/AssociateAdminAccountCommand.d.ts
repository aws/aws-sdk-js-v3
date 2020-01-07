import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { AssociateAdminAccountRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateAdminAccountCommandInput = AssociateAdminAccountRequest;
export declare type AssociateAdminAccountCommandOutput = __MetadataBearer;
export declare class AssociateAdminAccountCommand extends $Command<AssociateAdminAccountCommandInput, AssociateAdminAccountCommandOutput, FMSClientResolvedConfig> {
    readonly input: AssociateAdminAccountCommandInput;
    constructor(input: AssociateAdminAccountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateAdminAccountCommandInput, AssociateAdminAccountCommandOutput>;
    private serialize;
    private deserialize;
}
