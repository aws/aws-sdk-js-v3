import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeSuggestersRequest, DescribeSuggestersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSuggestersCommandInput = DescribeSuggestersRequest;
export declare type DescribeSuggestersCommandOutput = DescribeSuggestersResponse & __MetadataBearer;
export declare class DescribeSuggestersCommand extends $Command<DescribeSuggestersCommandInput, DescribeSuggestersCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DescribeSuggestersCommandInput;
    constructor(input: DescribeSuggestersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSuggestersCommandInput, DescribeSuggestersCommandOutput>;
    private serialize;
    private deserialize;
}
