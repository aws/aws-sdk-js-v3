import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetCostAndUsageRequest, GetCostAndUsageResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCostAndUsageCommandInput = GetCostAndUsageRequest;
export declare type GetCostAndUsageCommandOutput = GetCostAndUsageResponse & __MetadataBearer;
export declare class GetCostAndUsageCommand extends $Command<GetCostAndUsageCommandInput, GetCostAndUsageCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetCostAndUsageCommandInput;
    constructor(input: GetCostAndUsageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCostAndUsageCommandInput, GetCostAndUsageCommandOutput>;
    private serialize;
    private deserialize;
}
