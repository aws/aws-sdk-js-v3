import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { StopInstanceRequest, StopInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopInstanceCommandInput = StopInstanceRequest;
export declare type StopInstanceCommandOutput = StopInstanceResult & __MetadataBearer;
export declare class StopInstanceCommand extends $Command<StopInstanceCommandInput, StopInstanceCommandOutput, LightsailClientResolvedConfig> {
    readonly input: StopInstanceCommandInput;
    constructor(input: StopInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopInstanceCommandInput, StopInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
