import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribePatchPropertiesRequest, DescribePatchPropertiesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePatchPropertiesCommandInput = DescribePatchPropertiesRequest;
export declare type DescribePatchPropertiesCommandOutput = DescribePatchPropertiesResult & __MetadataBearer;
export declare class DescribePatchPropertiesCommand extends $Command<DescribePatchPropertiesCommandInput, DescribePatchPropertiesCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribePatchPropertiesCommandInput;
    constructor(input: DescribePatchPropertiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePatchPropertiesCommandInput, DescribePatchPropertiesCommandOutput>;
    private serialize;
    private deserialize;
}
