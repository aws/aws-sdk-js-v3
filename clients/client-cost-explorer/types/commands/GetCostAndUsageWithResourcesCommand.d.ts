import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetCostAndUsageWithResourcesRequest, GetCostAndUsageWithResourcesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCostAndUsageWithResourcesCommandInput = GetCostAndUsageWithResourcesRequest;
export declare type GetCostAndUsageWithResourcesCommandOutput = GetCostAndUsageWithResourcesResponse & __MetadataBearer;
export declare class GetCostAndUsageWithResourcesCommand extends $Command<GetCostAndUsageWithResourcesCommandInput, GetCostAndUsageWithResourcesCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetCostAndUsageWithResourcesCommandInput;
    constructor(input: GetCostAndUsageWithResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCostAndUsageWithResourcesCommandInput, GetCostAndUsageWithResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
