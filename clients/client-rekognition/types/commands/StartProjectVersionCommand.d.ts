import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartProjectVersionRequest, StartProjectVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartProjectVersionCommandInput = StartProjectVersionRequest;
export declare type StartProjectVersionCommandOutput = StartProjectVersionResponse & __MetadataBearer;
export declare class StartProjectVersionCommand extends $Command<StartProjectVersionCommandInput, StartProjectVersionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StartProjectVersionCommandInput;
    constructor(input: StartProjectVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartProjectVersionCommandInput, StartProjectVersionCommandOutput>;
    private serialize;
    private deserialize;
}
