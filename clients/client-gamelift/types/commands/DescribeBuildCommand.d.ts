import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeBuildInput, DescribeBuildOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeBuildCommandInput = DescribeBuildInput;
export declare type DescribeBuildCommandOutput = DescribeBuildOutput & __MetadataBearer;
export declare class DescribeBuildCommand extends $Command<DescribeBuildCommandInput, DescribeBuildCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeBuildCommandInput;
    constructor(input: DescribeBuildCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBuildCommandInput, DescribeBuildCommandOutput>;
    private serialize;
    private deserialize;
}
