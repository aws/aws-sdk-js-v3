import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { GetEndpointAttributesInput, GetEndpointAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetEndpointAttributesCommandInput = GetEndpointAttributesInput;
export declare type GetEndpointAttributesCommandOutput = GetEndpointAttributesResponse & __MetadataBearer;
export declare class GetEndpointAttributesCommand extends $Command<GetEndpointAttributesCommandInput, GetEndpointAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: GetEndpointAttributesCommandInput;
    constructor(input: GetEndpointAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEndpointAttributesCommandInput, GetEndpointAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
