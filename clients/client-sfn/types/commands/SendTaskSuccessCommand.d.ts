import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { SendTaskSuccessInput, SendTaskSuccessOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendTaskSuccessCommandInput = SendTaskSuccessInput;
export declare type SendTaskSuccessCommandOutput = SendTaskSuccessOutput & __MetadataBearer;
export declare class SendTaskSuccessCommand extends $Command<SendTaskSuccessCommandInput, SendTaskSuccessCommandOutput, SFNClientResolvedConfig> {
    readonly input: SendTaskSuccessCommandInput;
    constructor(input: SendTaskSuccessCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendTaskSuccessCommandInput, SendTaskSuccessCommandOutput>;
    private serialize;
    private deserialize;
}
