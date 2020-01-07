import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeSubscribedWorkteamRequest, DescribeSubscribedWorkteamResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSubscribedWorkteamCommandInput = DescribeSubscribedWorkteamRequest;
export declare type DescribeSubscribedWorkteamCommandOutput = DescribeSubscribedWorkteamResponse & __MetadataBearer;
export declare class DescribeSubscribedWorkteamCommand extends $Command<DescribeSubscribedWorkteamCommandInput, DescribeSubscribedWorkteamCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeSubscribedWorkteamCommandInput;
    constructor(input: DescribeSubscribedWorkteamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSubscribedWorkteamCommandInput, DescribeSubscribedWorkteamCommandOutput>;
    private serialize;
    private deserialize;
}
