import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { StartEntitiesDetectionV2JobRequest, StartEntitiesDetectionV2JobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartEntitiesDetectionV2JobCommandInput = StartEntitiesDetectionV2JobRequest;
export declare type StartEntitiesDetectionV2JobCommandOutput = StartEntitiesDetectionV2JobResponse & __MetadataBearer;
export declare class StartEntitiesDetectionV2JobCommand extends $Command<StartEntitiesDetectionV2JobCommandInput, StartEntitiesDetectionV2JobCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: StartEntitiesDetectionV2JobCommandInput;
    constructor(input: StartEntitiesDetectionV2JobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartEntitiesDetectionV2JobCommandInput, StartEntitiesDetectionV2JobCommandOutput>;
    private serialize;
    private deserialize;
}
