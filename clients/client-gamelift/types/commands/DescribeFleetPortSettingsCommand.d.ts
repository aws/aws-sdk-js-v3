import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetPortSettingsInput, DescribeFleetPortSettingsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFleetPortSettingsCommandInput = DescribeFleetPortSettingsInput;
export declare type DescribeFleetPortSettingsCommandOutput = DescribeFleetPortSettingsOutput & __MetadataBearer;
export declare class DescribeFleetPortSettingsCommand extends $Command<DescribeFleetPortSettingsCommandInput, DescribeFleetPortSettingsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeFleetPortSettingsCommandInput;
    constructor(input: DescribeFleetPortSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetPortSettingsCommandInput, DescribeFleetPortSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
