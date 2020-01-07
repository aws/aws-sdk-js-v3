import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListDistributionsByWebACLIdRequest, ListDistributionsByWebACLIdResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDistributionsByWebACLIdCommandInput = ListDistributionsByWebACLIdRequest;
export declare type ListDistributionsByWebACLIdCommandOutput = ListDistributionsByWebACLIdResult & __MetadataBearer;
export declare class ListDistributionsByWebACLIdCommand extends $Command<ListDistributionsByWebACLIdCommandInput, ListDistributionsByWebACLIdCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: ListDistributionsByWebACLIdCommandInput;
    constructor(input: ListDistributionsByWebACLIdCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDistributionsByWebACLIdCommandInput, ListDistributionsByWebACLIdCommandOutput>;
    private serialize;
    private deserialize;
}
