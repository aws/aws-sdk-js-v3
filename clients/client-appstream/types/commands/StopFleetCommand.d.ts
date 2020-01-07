import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { StopFleetRequest, StopFleetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopFleetCommandInput = StopFleetRequest;
export declare type StopFleetCommandOutput = StopFleetResult & __MetadataBearer;
export declare class StopFleetCommand extends $Command<StopFleetCommandInput, StopFleetCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: StopFleetCommandInput;
    constructor(input: StopFleetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopFleetCommandInput, StopFleetCommandOutput>;
    private serialize;
    private deserialize;
}
