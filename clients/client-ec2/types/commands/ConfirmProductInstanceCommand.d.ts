import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ConfirmProductInstanceRequest, ConfirmProductInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ConfirmProductInstanceCommandInput = ConfirmProductInstanceRequest;
export declare type ConfirmProductInstanceCommandOutput = ConfirmProductInstanceResult & __MetadataBearer;
export declare class ConfirmProductInstanceCommand extends $Command<ConfirmProductInstanceCommandInput, ConfirmProductInstanceCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ConfirmProductInstanceCommandInput;
    constructor(input: ConfirmProductInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmProductInstanceCommandInput, ConfirmProductInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
