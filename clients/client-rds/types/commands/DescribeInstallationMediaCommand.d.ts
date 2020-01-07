import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeInstallationMediaMessage, InstallationMediaMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstallationMediaCommandInput = DescribeInstallationMediaMessage;
export declare type DescribeInstallationMediaCommandOutput = InstallationMediaMessage & __MetadataBearer;
export declare class DescribeInstallationMediaCommand extends $Command<DescribeInstallationMediaCommandInput, DescribeInstallationMediaCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeInstallationMediaCommandInput;
    constructor(input: DescribeInstallationMediaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstallationMediaCommandInput, DescribeInstallationMediaCommandOutput>;
    private serialize;
    private deserialize;
}
