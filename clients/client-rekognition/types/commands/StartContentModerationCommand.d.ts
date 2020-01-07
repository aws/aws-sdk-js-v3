import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartContentModerationRequest, StartContentModerationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartContentModerationCommandInput = StartContentModerationRequest;
export declare type StartContentModerationCommandOutput = StartContentModerationResponse & __MetadataBearer;
export declare class StartContentModerationCommand extends $Command<StartContentModerationCommandInput, StartContentModerationCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StartContentModerationCommandInput;
    constructor(input: StartContentModerationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartContentModerationCommandInput, StartContentModerationCommandOutput>;
    private serialize;
    private deserialize;
}
