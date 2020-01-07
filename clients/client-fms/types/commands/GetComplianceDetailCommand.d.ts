import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetComplianceDetailRequest, GetComplianceDetailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetComplianceDetailCommandInput = GetComplianceDetailRequest;
export declare type GetComplianceDetailCommandOutput = GetComplianceDetailResponse & __MetadataBearer;
export declare class GetComplianceDetailCommand extends $Command<GetComplianceDetailCommandInput, GetComplianceDetailCommandOutput, FMSClientResolvedConfig> {
    readonly input: GetComplianceDetailCommandInput;
    constructor(input: GetComplianceDetailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetComplianceDetailCommandInput, GetComplianceDetailCommandOutput>;
    private serialize;
    private deserialize;
}
