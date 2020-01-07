import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { StopEntitiesDetectionV2JobRequest, StopEntitiesDetectionV2JobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopEntitiesDetectionV2JobCommandInput = StopEntitiesDetectionV2JobRequest;
export declare type StopEntitiesDetectionV2JobCommandOutput = StopEntitiesDetectionV2JobResponse & __MetadataBearer;
export declare class StopEntitiesDetectionV2JobCommand extends $Command<StopEntitiesDetectionV2JobCommandInput, StopEntitiesDetectionV2JobCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: StopEntitiesDetectionV2JobCommandInput;
    constructor(input: StopEntitiesDetectionV2JobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopEntitiesDetectionV2JobCommandInput, StopEntitiesDetectionV2JobCommandOutput>;
    private serialize;
    private deserialize;
}
