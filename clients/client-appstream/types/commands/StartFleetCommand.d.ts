import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { StartFleetRequest, StartFleetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartFleetCommandInput = StartFleetRequest;
export declare type StartFleetCommandOutput = StartFleetResult & __MetadataBearer;
export declare class StartFleetCommand extends $Command<StartFleetCommandInput, StartFleetCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: StartFleetCommandInput;
    constructor(input: StartFleetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartFleetCommandInput, StartFleetCommandOutput>;
    private serialize;
    private deserialize;
}
