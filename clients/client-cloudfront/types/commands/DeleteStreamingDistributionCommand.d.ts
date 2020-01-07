import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteStreamingDistributionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteStreamingDistributionCommandInput = DeleteStreamingDistributionRequest;
export declare type DeleteStreamingDistributionCommandOutput = __MetadataBearer;
export declare class DeleteStreamingDistributionCommand extends $Command<DeleteStreamingDistributionCommandInput, DeleteStreamingDistributionCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: DeleteStreamingDistributionCommandInput;
    constructor(input: DeleteStreamingDistributionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStreamingDistributionCommandInput, DeleteStreamingDistributionCommandOutput>;
    private serialize;
    private deserialize;
}
