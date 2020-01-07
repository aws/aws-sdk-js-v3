import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribePatchGroupsRequest, DescribePatchGroupsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePatchGroupsCommandInput = DescribePatchGroupsRequest;
export declare type DescribePatchGroupsCommandOutput = DescribePatchGroupsResult & __MetadataBearer;
export declare class DescribePatchGroupsCommand extends $Command<DescribePatchGroupsCommandInput, DescribePatchGroupsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribePatchGroupsCommandInput;
    constructor(input: DescribePatchGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePatchGroupsCommandInput, DescribePatchGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
