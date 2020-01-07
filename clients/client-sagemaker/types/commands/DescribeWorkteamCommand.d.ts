import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeWorkteamRequest, DescribeWorkteamResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeWorkteamCommandInput = DescribeWorkteamRequest;
export declare type DescribeWorkteamCommandOutput = DescribeWorkteamResponse & __MetadataBearer;
export declare class DescribeWorkteamCommand extends $Command<DescribeWorkteamCommandInput, DescribeWorkteamCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeWorkteamCommandInput;
    constructor(input: DescribeWorkteamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorkteamCommandInput, DescribeWorkteamCommandOutput>;
    private serialize;
    private deserialize;
}
