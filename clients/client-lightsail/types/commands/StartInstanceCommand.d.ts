import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { StartInstanceRequest, StartInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartInstanceCommandInput = StartInstanceRequest;
export declare type StartInstanceCommandOutput = StartInstanceResult & __MetadataBearer;
export declare class StartInstanceCommand extends $Command<StartInstanceCommandInput, StartInstanceCommandOutput, LightsailClientResolvedConfig> {
    readonly input: StartInstanceCommandInput;
    constructor(input: StartInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartInstanceCommandInput, StartInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
