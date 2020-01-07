import { IoTSecureTunnelingClient } from "./IoTSecureTunnelingClient";
import { CloseTunnelCommandInput, CloseTunnelCommandOutput } from "./commands/CloseTunnelCommand";
import { DescribeTunnelCommandInput, DescribeTunnelCommandOutput } from "./commands/DescribeTunnelCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListTunnelsCommandInput, ListTunnelsCommandOutput } from "./commands/ListTunnelsCommand";
import { OpenTunnelCommandInput, OpenTunnelCommandOutput } from "./commands/OpenTunnelCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS IoT Secure Tunneling</fullname>
 * 		       <p>AWS IoT Secure Tunnling enables you to create remote connections to devices
 * 			deployed in the field.</p>
 * 		       <p>For more information about how AWS IoT Secure Tunneling works, see the <a href="https://docs.aws.amazon.com/secure-tunneling/latest/ug/what-is-secure-tunneling.html">User
 * 			Guide</a>.</p>
 */
export declare class IoTSecureTunneling extends IoTSecureTunnelingClient {
    /**
     * <p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code>
     * 			request is received, we close the WebSocket connections between the client and proxy
     * 			server so no data can be transmitted.</p>
     */
    closeTunnel(args: CloseTunnelCommandInput, options?: __HttpHandlerOptions): Promise<CloseTunnelCommandOutput>;
    closeTunnel(args: CloseTunnelCommandInput, cb: (err: any, data?: CloseTunnelCommandOutput) => void): void;
    closeTunnel(args: CloseTunnelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CloseTunnelCommandOutput) => void): void;
    /**
     * <p>Gets information about a tunnel identified by the unique tunnel id.</p>
     */
    describeTunnel(args: DescribeTunnelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTunnelCommandOutput>;
    describeTunnel(args: DescribeTunnelCommandInput, cb: (err: any, data?: DescribeTunnelCommandOutput) => void): void;
    describeTunnel(args: DescribeTunnelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTunnelCommandOutput) => void): void;
    /**
     * <p>Lists the tags for the specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>List all tunnels for an AWS account. Tunnels are listed by creation time in
     * 			descending order, newer tunnels will be listed before older tunnels.</p>
     */
    listTunnels(args: ListTunnelsCommandInput, options?: __HttpHandlerOptions): Promise<ListTunnelsCommandOutput>;
    listTunnels(args: ListTunnelsCommandInput, cb: (err: any, data?: ListTunnelsCommandOutput) => void): void;
    listTunnels(args: ListTunnelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTunnelsCommandOutput) => void): void;
    /**
     * <p>Creates a new tunnel, and returns two client access tokens for clients to use to
     * 			connect to the AWS IoT Secure Tunneling proxy server. .</p>
     */
    openTunnel(args: OpenTunnelCommandInput, options?: __HttpHandlerOptions): Promise<OpenTunnelCommandOutput>;
    openTunnel(args: OpenTunnelCommandInput, cb: (err: any, data?: OpenTunnelCommandOutput) => void): void;
    openTunnel(args: OpenTunnelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: OpenTunnelCommandOutput) => void): void;
    /**
     * <p>A resource tag.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes a tag from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
