import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetSavingsPlansUtilizationRequest, GetSavingsPlansUtilizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSavingsPlansUtilizationCommandInput = GetSavingsPlansUtilizationRequest;
export declare type GetSavingsPlansUtilizationCommandOutput = GetSavingsPlansUtilizationResponse & __MetadataBearer;
export declare class GetSavingsPlansUtilizationCommand extends $Command<GetSavingsPlansUtilizationCommandInput, GetSavingsPlansUtilizationCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetSavingsPlansUtilizationCommandInput;
    constructor(input: GetSavingsPlansUtilizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSavingsPlansUtilizationCommandInput, GetSavingsPlansUtilizationCommandOutput>;
    private serialize;
    private deserialize;
}
