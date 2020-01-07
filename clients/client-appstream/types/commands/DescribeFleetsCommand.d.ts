import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeFleetsRequest, DescribeFleetsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFleetsCommandInput = DescribeFleetsRequest;
export declare type DescribeFleetsCommandOutput = DescribeFleetsResult & __MetadataBearer;
export declare class DescribeFleetsCommand extends $Command<DescribeFleetsCommandInput, DescribeFleetsCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DescribeFleetsCommandInput;
    constructor(input: DescribeFleetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetsCommandInput, DescribeFleetsCommandOutput>;
    private serialize;
    private deserialize;
}
