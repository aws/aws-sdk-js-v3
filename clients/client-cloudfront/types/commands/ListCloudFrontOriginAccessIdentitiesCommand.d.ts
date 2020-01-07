import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListCloudFrontOriginAccessIdentitiesRequest, ListCloudFrontOriginAccessIdentitiesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCloudFrontOriginAccessIdentitiesCommandInput = ListCloudFrontOriginAccessIdentitiesRequest;
export declare type ListCloudFrontOriginAccessIdentitiesCommandOutput = ListCloudFrontOriginAccessIdentitiesResult & __MetadataBearer;
export declare class ListCloudFrontOriginAccessIdentitiesCommand extends $Command<ListCloudFrontOriginAccessIdentitiesCommandInput, ListCloudFrontOriginAccessIdentitiesCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: ListCloudFrontOriginAccessIdentitiesCommandInput;
    constructor(input: ListCloudFrontOriginAccessIdentitiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCloudFrontOriginAccessIdentitiesCommandInput, ListCloudFrontOriginAccessIdentitiesCommandOutput>;
    private serialize;
    private deserialize;
}
