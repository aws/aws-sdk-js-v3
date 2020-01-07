import { ResourceGroupsTaggingAPIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsTaggingAPIClient";
import { GetTagKeysInput, GetTagKeysOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTagKeysCommandInput = GetTagKeysInput;
export declare type GetTagKeysCommandOutput = GetTagKeysOutput & __MetadataBearer;
export declare class GetTagKeysCommand extends $Command<GetTagKeysCommandInput, GetTagKeysCommandOutput, ResourceGroupsTaggingAPIClientResolvedConfig> {
    readonly input: GetTagKeysCommandInput;
    constructor(input: GetTagKeysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsTaggingAPIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTagKeysCommandInput, GetTagKeysCommandOutput>;
    private serialize;
    private deserialize;
}
