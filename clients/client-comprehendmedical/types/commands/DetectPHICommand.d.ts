import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { DetectPHIRequest, DetectPHIResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectPHICommandInput = DetectPHIRequest;
export declare type DetectPHICommandOutput = DetectPHIResponse & __MetadataBearer;
export declare class DetectPHICommand extends $Command<DetectPHICommandInput, DetectPHICommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: DetectPHICommandInput;
    constructor(input: DetectPHICommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectPHICommandInput, DetectPHICommandOutput>;
    private serialize;
    private deserialize;
}
