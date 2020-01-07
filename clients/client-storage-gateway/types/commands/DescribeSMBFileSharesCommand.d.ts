import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeSMBFileSharesInput, DescribeSMBFileSharesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSMBFileSharesCommandInput = DescribeSMBFileSharesInput;
export declare type DescribeSMBFileSharesCommandOutput = DescribeSMBFileSharesOutput & __MetadataBearer;
export declare class DescribeSMBFileSharesCommand extends $Command<DescribeSMBFileSharesCommandInput, DescribeSMBFileSharesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeSMBFileSharesCommandInput;
    constructor(input: DescribeSMBFileSharesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSMBFileSharesCommandInput, DescribeSMBFileSharesCommandOutput>;
    private serialize;
    private deserialize;
}
