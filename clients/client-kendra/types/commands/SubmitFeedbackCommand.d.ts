import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { SubmitFeedbackRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SubmitFeedbackCommandInput = SubmitFeedbackRequest;
export declare type SubmitFeedbackCommandOutput = __MetadataBearer;
export declare class SubmitFeedbackCommand extends $Command<SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput, kendraClientResolvedConfig> {
    readonly input: SubmitFeedbackCommandInput;
    constructor(input: SubmitFeedbackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput>;
    private serialize;
    private deserialize;
}
