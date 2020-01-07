import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteDistributionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDistributionCommandInput = DeleteDistributionRequest;
export declare type DeleteDistributionCommandOutput = __MetadataBearer;
export declare class DeleteDistributionCommand extends $Command<DeleteDistributionCommandInput, DeleteDistributionCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: DeleteDistributionCommandInput;
    constructor(input: DeleteDistributionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDistributionCommandInput, DeleteDistributionCommandOutput>;
    private serialize;
    private deserialize;
}
