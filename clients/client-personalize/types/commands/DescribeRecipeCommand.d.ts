import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeRecipeRequest, DescribeRecipeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRecipeCommandInput = DescribeRecipeRequest;
export declare type DescribeRecipeCommandOutput = DescribeRecipeResponse & __MetadataBearer;
export declare class DescribeRecipeCommand extends $Command<DescribeRecipeCommandInput, DescribeRecipeCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeRecipeCommandInput;
    constructor(input: DescribeRecipeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRecipeCommandInput, DescribeRecipeCommandOutput>;
    private serialize;
    private deserialize;
}
