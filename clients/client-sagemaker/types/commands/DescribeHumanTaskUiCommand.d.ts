import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeHumanTaskUiRequest, DescribeHumanTaskUiResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeHumanTaskUiCommandInput = DescribeHumanTaskUiRequest;
export declare type DescribeHumanTaskUiCommandOutput = DescribeHumanTaskUiResponse & __MetadataBearer;
export declare class DescribeHumanTaskUiCommand extends $Command<DescribeHumanTaskUiCommandInput, DescribeHumanTaskUiCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeHumanTaskUiCommandInput;
    constructor(input: DescribeHumanTaskUiCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHumanTaskUiCommandInput, DescribeHumanTaskUiCommandOutput>;
    private serialize;
    private deserialize;
}
