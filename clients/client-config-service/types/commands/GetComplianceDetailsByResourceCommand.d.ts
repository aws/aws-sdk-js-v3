import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetComplianceDetailsByResourceRequest, GetComplianceDetailsByResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetComplianceDetailsByResourceCommandInput = GetComplianceDetailsByResourceRequest;
export declare type GetComplianceDetailsByResourceCommandOutput = GetComplianceDetailsByResourceResponse & __MetadataBearer;
export declare class GetComplianceDetailsByResourceCommand extends $Command<GetComplianceDetailsByResourceCommandInput, GetComplianceDetailsByResourceCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetComplianceDetailsByResourceCommandInput;
    constructor(input: GetComplianceDetailsByResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetComplianceDetailsByResourceCommandInput, GetComplianceDetailsByResourceCommandOutput>;
    private serialize;
    private deserialize;
}
