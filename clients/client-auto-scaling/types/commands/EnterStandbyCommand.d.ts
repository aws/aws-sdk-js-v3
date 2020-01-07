import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { EnterStandbyAnswer, EnterStandbyQuery } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnterStandbyCommandInput = EnterStandbyQuery;
export declare type EnterStandbyCommandOutput = EnterStandbyAnswer & __MetadataBearer;
export declare class EnterStandbyCommand extends $Command<EnterStandbyCommandInput, EnterStandbyCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: EnterStandbyCommandInput;
    constructor(input: EnterStandbyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnterStandbyCommandInput, EnterStandbyCommandOutput>;
    private serialize;
    private deserialize;
}
