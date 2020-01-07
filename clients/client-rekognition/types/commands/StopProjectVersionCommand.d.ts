import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StopProjectVersionRequest, StopProjectVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopProjectVersionCommandInput = StopProjectVersionRequest;
export declare type StopProjectVersionCommandOutput = StopProjectVersionResponse & __MetadataBearer;
export declare class StopProjectVersionCommand extends $Command<StopProjectVersionCommandInput, StopProjectVersionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StopProjectVersionCommandInput;
    constructor(input: StopProjectVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopProjectVersionCommandInput, StopProjectVersionCommandOutput>;
    private serialize;
    private deserialize;
}
