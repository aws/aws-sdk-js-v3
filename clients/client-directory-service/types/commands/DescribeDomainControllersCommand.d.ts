import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeDomainControllersRequest, DescribeDomainControllersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDomainControllersCommandInput = DescribeDomainControllersRequest;
export declare type DescribeDomainControllersCommandOutput = DescribeDomainControllersResult & __MetadataBearer;
export declare class DescribeDomainControllersCommand extends $Command<DescribeDomainControllersCommandInput, DescribeDomainControllersCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DescribeDomainControllersCommandInput;
    constructor(input: DescribeDomainControllersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDomainControllersCommandInput, DescribeDomainControllersCommandOutput>;
    private serialize;
    private deserialize;
}
