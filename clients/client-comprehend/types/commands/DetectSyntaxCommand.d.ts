import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DetectSyntaxRequest, DetectSyntaxResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectSyntaxCommandInput = DetectSyntaxRequest;
export declare type DetectSyntaxCommandOutput = DetectSyntaxResponse & __MetadataBearer;
export declare class DetectSyntaxCommand extends $Command<DetectSyntaxCommandInput, DetectSyntaxCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DetectSyntaxCommandInput;
    constructor(input: DetectSyntaxCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectSyntaxCommandInput, DetectSyntaxCommandOutput>;
    private serialize;
    private deserialize;
}
