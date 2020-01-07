import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { PutComplianceItemsRequest, PutComplianceItemsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutComplianceItemsCommandInput = PutComplianceItemsRequest;
export declare type PutComplianceItemsCommandOutput = PutComplianceItemsResult & __MetadataBearer;
export declare class PutComplianceItemsCommand extends $Command<PutComplianceItemsCommandInput, PutComplianceItemsCommandOutput, SSMClientResolvedConfig> {
    readonly input: PutComplianceItemsCommandInput;
    constructor(input: PutComplianceItemsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutComplianceItemsCommandInput, PutComplianceItemsCommandOutput>;
    private serialize;
    private deserialize;
}
