import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { GetOperationDetailRequest, GetOperationDetailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOperationDetailCommandInput = GetOperationDetailRequest;
export declare type GetOperationDetailCommandOutput = GetOperationDetailResponse & __MetadataBearer;
export declare class GetOperationDetailCommand extends $Command<GetOperationDetailCommandInput, GetOperationDetailCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: GetOperationDetailCommandInput;
    constructor(input: GetOperationDetailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOperationDetailCommandInput, GetOperationDetailCommandOutput>;
    private serialize;
    private deserialize;
}
