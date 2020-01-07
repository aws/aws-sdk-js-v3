import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetDimensionValuesRequest, GetDimensionValuesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDimensionValuesCommandInput = GetDimensionValuesRequest;
export declare type GetDimensionValuesCommandOutput = GetDimensionValuesResponse & __MetadataBearer;
export declare class GetDimensionValuesCommand extends $Command<GetDimensionValuesCommandInput, GetDimensionValuesCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetDimensionValuesCommandInput;
    constructor(input: GetDimensionValuesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDimensionValuesCommandInput, GetDimensionValuesCommandOutput>;
    private serialize;
    private deserialize;
}
