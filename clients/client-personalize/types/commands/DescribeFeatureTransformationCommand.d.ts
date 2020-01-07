import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeFeatureTransformationRequest, DescribeFeatureTransformationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFeatureTransformationCommandInput = DescribeFeatureTransformationRequest;
export declare type DescribeFeatureTransformationCommandOutput = DescribeFeatureTransformationResponse & __MetadataBearer;
export declare class DescribeFeatureTransformationCommand extends $Command<DescribeFeatureTransformationCommandInput, DescribeFeatureTransformationCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeFeatureTransformationCommandInput;
    constructor(input: DescribeFeatureTransformationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFeatureTransformationCommandInput, DescribeFeatureTransformationCommandOutput>;
    private serialize;
    private deserialize;
}
