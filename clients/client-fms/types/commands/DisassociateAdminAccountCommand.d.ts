import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { DisassociateAdminAccountRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateAdminAccountCommandInput = DisassociateAdminAccountRequest;
export declare type DisassociateAdminAccountCommandOutput = __MetadataBearer;
export declare class DisassociateAdminAccountCommand extends $Command<DisassociateAdminAccountCommandInput, DisassociateAdminAccountCommandOutput, FMSClientResolvedConfig> {
    readonly input: DisassociateAdminAccountCommandInput;
    constructor(input: DisassociateAdminAccountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateAdminAccountCommandInput, DisassociateAdminAccountCommandOutput>;
    private serialize;
    private deserialize;
}
