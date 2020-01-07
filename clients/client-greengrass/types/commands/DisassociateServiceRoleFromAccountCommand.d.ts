import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DisassociateServiceRoleFromAccountRequest, DisassociateServiceRoleFromAccountResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateServiceRoleFromAccountCommandInput = DisassociateServiceRoleFromAccountRequest;
export declare type DisassociateServiceRoleFromAccountCommandOutput = DisassociateServiceRoleFromAccountResponse & __MetadataBearer;
export declare class DisassociateServiceRoleFromAccountCommand extends $Command<DisassociateServiceRoleFromAccountCommandInput, DisassociateServiceRoleFromAccountCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DisassociateServiceRoleFromAccountCommandInput;
    constructor(input: DisassociateServiceRoleFromAccountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateServiceRoleFromAccountCommandInput, DisassociateServiceRoleFromAccountCommandOutput>;
    private serialize;
    private deserialize;
}
