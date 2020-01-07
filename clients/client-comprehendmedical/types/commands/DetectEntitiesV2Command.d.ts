import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { DetectEntitiesV2Request, DetectEntitiesV2Response } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectEntitiesV2CommandInput = DetectEntitiesV2Request;
export declare type DetectEntitiesV2CommandOutput = DetectEntitiesV2Response & __MetadataBearer;
export declare class DetectEntitiesV2Command extends $Command<DetectEntitiesV2CommandInput, DetectEntitiesV2CommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: DetectEntitiesV2CommandInput;
    constructor(input: DetectEntitiesV2CommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectEntitiesV2CommandInput, DetectEntitiesV2CommandOutput>;
    private serialize;
    private deserialize;
}
