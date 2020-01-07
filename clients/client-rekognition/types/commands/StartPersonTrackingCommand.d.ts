import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartPersonTrackingRequest, StartPersonTrackingResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartPersonTrackingCommandInput = StartPersonTrackingRequest;
export declare type StartPersonTrackingCommandOutput = StartPersonTrackingResponse & __MetadataBearer;
export declare class StartPersonTrackingCommand extends $Command<StartPersonTrackingCommandInput, StartPersonTrackingCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StartPersonTrackingCommandInput;
    constructor(input: StartPersonTrackingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartPersonTrackingCommandInput, StartPersonTrackingCommandOutput>;
    private serialize;
    private deserialize;
}
