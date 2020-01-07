import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartFaceSearchRequest, StartFaceSearchResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartFaceSearchCommandInput = StartFaceSearchRequest;
export declare type StartFaceSearchCommandOutput = StartFaceSearchResponse & __MetadataBearer;
export declare class StartFaceSearchCommand extends $Command<StartFaceSearchCommandInput, StartFaceSearchCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StartFaceSearchCommandInput;
    constructor(input: StartFaceSearchCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartFaceSearchCommandInput, StartFaceSearchCommandOutput>;
    private serialize;
    private deserialize;
}
