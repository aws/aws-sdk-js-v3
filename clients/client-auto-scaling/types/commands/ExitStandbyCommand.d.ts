import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { ExitStandbyAnswer, ExitStandbyQuery } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ExitStandbyCommandInput = ExitStandbyQuery;
export declare type ExitStandbyCommandOutput = ExitStandbyAnswer & __MetadataBearer;
export declare class ExitStandbyCommand extends $Command<ExitStandbyCommandInput, ExitStandbyCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: ExitStandbyCommandInput;
    constructor(input: ExitStandbyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExitStandbyCommandInput, ExitStandbyCommandOutput>;
    private serialize;
    private deserialize;
}
