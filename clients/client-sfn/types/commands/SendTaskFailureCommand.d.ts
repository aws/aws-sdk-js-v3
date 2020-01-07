import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { SendTaskFailureInput, SendTaskFailureOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendTaskFailureCommandInput = SendTaskFailureInput;
export declare type SendTaskFailureCommandOutput = SendTaskFailureOutput & __MetadataBearer;
export declare class SendTaskFailureCommand extends $Command<SendTaskFailureCommandInput, SendTaskFailureCommandOutput, SFNClientResolvedConfig> {
    readonly input: SendTaskFailureCommandInput;
    constructor(input: SendTaskFailureCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendTaskFailureCommandInput, SendTaskFailureCommandOutput>;
    private serialize;
    private deserialize;
}
